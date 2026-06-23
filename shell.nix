{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "django-dev-shell";

  buildInputs = [
    # Python 3.13 bundled with Django and the Postgres adapter
    (pkgs.python313.withPackages (ps: [
      ps.django
      ps.psycopg  # Modern PostgreSQL adapter for Python 3
      ps.pyjwt
    ]))

    # PostgreSQL server and client binaries (psql, initdb, etc.)
    pkgs.postgresql_16
  ];

  shellHook = ''
    echo "⚡ Nix-managed Django & Postgres Environment Activated ⚡"
    
    # Setup a local directory for the database so it doesn't touch your system roots
    export PGDATA="$PWD/.direnv/postgres"
    export PGSOCK="$PWD/.direnv/sockets"
    mkdir -p "$PGSOCK"

    # Initialize the database if it doesn't exist
    if [ ! -d "$PGDATA" ]; then
      echo "📦 Initializing database directory..."
      initdb --auth=trust -U postgres
    fi

    # Start the Postgres server if it isn't running
    if ! pg_ctl status >/dev/null 2>&1; then
      echo "🚀 Starting PostgreSQL server..."
      pg_ctl -o "-k $PGSOCK" -l "$PGDATA/server.log" start
    fi

    # Configure Django environment variables to point to this local setup
    export PGHOST="$PGSOCK"
    export PGUSER="postgres"

    python --version
    django-admin --version
  '';
}
