## Управление миграциями

Заходим внутрь контейнера

        docker ps
        docker exec -it [CONTAINER_ID] bash

Внутри контейнера

        # Обновить миргации
        alembic upgrade head
        
        # Откатить миграции
        alembic downgrade base

[1]

[2]

[3]

[4]

[5]

[6]
> [validators](https://pydantic-docs.helpmanual.io/usage/validators/)
>
>[constrained-types](https://pydantic-docs.helpmanual.io/usage/types/#constrained-types)

[7]
> [Rainbow_table](https://en.wikipedia.org/wiki/Rainbow_table)
>
> [Salt](https://en.wikipedia.org/wiki/Salt_(cryptography))
>
> [jwt](https://www.jeffastor.com/blog/jwt.io)
>
> [bcrypt-calculator](https://www.dailycred.com/article/bcrypt-calculator)
>
> [passlib](https://passlib.readthedocs.io/en/stable/faq.html)
>
> [jwt introduction](https://jwt.io/introduction/)
>
> [jwt debugger](https://jwt.io/#debugger-io)

[8]
> [oauth2-jwt](https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/)
>
> [get-the-username-and-password](https://fastapi.tiangolo.com/tutorial/security/simple-oauth2/#get-the-username-and-password)
>
> [run-it](https://fastapi.tiangolo.com/tutorial/security/first-steps/#run-it)

[9]
> [select_queries_with_joins](https://sqlbolt.com/lesson/select_queries_with_joins)
>
> [Alembic](https://alembic.sqlalchemy.org/en/latest/tutorial.html)
>
> [sqlalchemy constraints](https://docs.sqlalchemy.org/en/13/core/constraints.html)

[10]
> [Dependencies in path operation decorators](https://fastapi.tiangolo.com/tutorial/dependencies/dependencies-in-path-operation-decorators/#dependencies-in-path-operation-decorators)
>
> [fastapi-permissions](https://github.com/holgi/fastapi-permissions)
>
> [fastapi_contrib](https://github.com/identixone/fastapi_contrib)
>
> [fastapi-realworld-example-app](https://github.com/nsidnev/fastapi-realworld-example-app)

[11]
> [tutorial-transactions](https://www.postgresql.org/docs/12/tutorial-transactions.html)
>
> [transactions](https://www.encode.io/databases/connections_and_transactions/#transactions)
>
> [params](https://fastapi.tiangolo.com/tutorial/path-params/)
>
> [dependencies-in-path-operation-decorators](https://fastapi.tiangolo.com/tutorial/dependencies/dependencies-in-path-operation-decorators/)
>
> [sql-databases](https://fastapi.tiangolo.com/tutorial/sql-databases/)
>
> [build-high-performing-apps-with-the-python-fastapi-framework](https://www.toptal.com/python/build-high-performing-apps-with-the-python-fastapi-framework)
