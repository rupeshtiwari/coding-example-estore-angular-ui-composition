# e-Store UI Composition sample App using Angular and NgRx

**e-Store** is a client side prototype application to solves **UI-Composition** problem for micro services architecture. This application proposes potential micro-frontend architecture for UI framework using Angular and NgRx. Visit the [e-store application live here](http://www.rupeshtiwari.com/coding-example-estore-angular-ui-composition/)

**e-store** shoping application has below use cases implementations in this project:

- Display Menu

![](https://i.imgur.com/xsuEBZR.png)

- ✔️ Listing Items for online sales

![](https://i.imgur.com/MgkYHTB.png)

- ✔️ Adding Item to Cart

![](https://i.imgur.com/5Whi2u7.png)

- ✔️ View Cart

![](https://i.imgur.com/zFNEpWc.png)

- ✔️ Checkout

![](https://i.imgur.com/94c3JQq.png)

- ✔️ Submit Order

![](https://i.imgur.com/HcV8Ajq.png)

## Service Oriented Architecture

### Business services

Business Services own the authority of technical responsibility for a business capability. So suppose you want to show item image and if item image belongs to sales service then it is the sales service module to bring angular component in to composed UI.

Example: Sales, Finance etc.

### Branding Service

Branding is the glue in the client side. It owns the pages like layout, settings, tool bar etc.

### ITOps Service

ITops service help system to keep the data flowing across various business services. Suppose you want to charge credit card.
In order to process credit card charge you need

- customer credit card info.
- Total price
- Ordered Line Items
- Tax info etc.
  All above data obviously does not belong to single service. price can come from finance, tax can come from finance, line item can come from sales service etc.
  So in order to get the data from various service. You need to create Itops whose responsibility is to expose interface like `IProvideTotal`, `IProvideOrderLineItems` etc. And let the services implement the interface and return the data to Itops service. Now ITops service can combine them and charge credit card.

This is back-end process and since this prototype is for client side ui composition. Therefore, I have not demonstrated Itops example here in source code.

## Code Architecture

There are 3 modules from below business services:

- ✔️ Sales
- ✔️ Finance and
- ✔️ Customers

There is `Branding Service` Modules which takes all of the above 3 modules code and create Composed UI pages.
`ItOps Service` module is also there which is not used yet.

## UI COmposition

See the app live in action [here](http://www.rupeshtiwari.com/coding-example-estore-angular-ui-composition/)

The **Products** page is a composed UI. It has components from `sales`, `finance` and `branding` services.

![](https://i.imgur.com/Qsfhvsw.png)

The **Cart Page** is also composed UI. The price and quantity comes from finance and sales service correspondingly.

![](https://i.imgur.com/9PoxKu8.png)

## Service Oriented Architecture in UI

This project is inspired by Service Oriented Architecture (SOA) philosophy.
There is an initiative going on to create prototype SOA here in this link https://github.com/Particular/Workshop.Microservices
This project is following SOA principle and trying to solve **client Side UI Composition** using mainly below libraries:

## Technology Used

- ✔️ NgRx
- ✔️ Angular

## Getting started

- Download code
- Run `npm ci`
- Run `npm start`

## Contribution

Due to time constraints I am not able to update this project. Below are pending task anyone intrested to contribute please feel free to create pull request.

- Update Angular to latest verion
- Update NgRx to latest version

Thank you!
