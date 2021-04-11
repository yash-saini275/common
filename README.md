# Common
Common module for ticketing service. This module is used by all the services.
It contains various components that are required by all the services.

# Components
| Name         | Description                   |
|:------------:|:-----------------------------:|
|Errors        |It contains all the errors that the application can throw if something goes unexpected. |
|Events        |It contains the structure and type of all events along with base event listener and publisher that must be inherited by all events listeners and publishers. |
|Middlewares   |All the middlewares that are required by the application. |
