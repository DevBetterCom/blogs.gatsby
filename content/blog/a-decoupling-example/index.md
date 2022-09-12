---
title: A Decoupling example
author: zalenix
date: "2022-09-08T00:20:00.000Z"
description: "How software modularity reduces cost of future changes"
category: software-development
featuredImage: ./decoupled.png
---
The cost of software primarily consists of the cost of maintaining software. And the cost of changing or maintaining software is mainly high because of cascading, significant changes in a coupled software system. Therefore, decoupling a software system almost always results in a better-designed system with a low cost to change. Let’s see this with the help of an example.

### Taking an example

Suppose you were a vet clinic, and you needed a software system to manage the visits to the clinic: recording visits, assigning visit procedures, and creating visit invoices. You would probably have three services, one for each of the functionality mentioned above. To add the interactions between the modules:

- Visit service takes in the customer, pet, date & time of visit as inputs and creates a visit.
- Procedure service takes a visit and adds one or more procedures to the visit.
- Invoice service takes a visit and creates an invoice for the visit’s procedures.

Let’s say the visit entity looks like the following:

	visit 
	{
	  visitId
	  customerName
	  petName
	  visitDate
	  procedures []
	}

The procedure entity would probably look like this:

	procedure 
	{
	  procedureId
	  procedureType
	  price
	}

To create an invoice, the Invoice service would need both the visit details and the procedure done:

	invoice
	{
	  visitDetails
	  proceduresDone []
	  amountDue
	}

There are a couple of options on what kind of data we could be passing into Invoice Service:

- It could take in the visit object, and the procedures object array. Then it would create the printable details from the visit object & procedures array and calculate the sum of the prices of each procedure in the procedures array.

OR

- It could take the visitId, and call the Visit Service to get the visit details printed and the Invoice Service to get the procedures’ name list and prices of the list of procedures done during the visit.

### Accessing coupling
Which of the two options above is the better design choice? Let’s look at how decoupled or coupled this simple software system is on both options.

#### Option 1: when entire objects are passed
Here, any changes to the visit schema, say when we add a customer phone number, will mean we need to change Visit Service, but also the Invoice Service. Invoice Service takes a visit object and creates the printable visit details to put on the invoice.

Also, any changes to the procedure, like adding a new procedure type, would not only require a change to Procedure Service but also the Invoice Service since Invoice Service takes in a procedure object. It would need to create the printable version of the new Procedure type.

#### Option 2: when only non-changing data is sent
In this case, the Invoice Service only takes in visitId and calls into Visit Service, for it should print onto the Invoice about the visit. This way, the visit schema can change as needed, and it would only require a change to the Visit Service. The contract between Invoice Service and Visit Service, as shown below, would remain unchanged:

	GetVisitDetails(visitId) → string

Similarly, InvoiceService would call into ProcedureSerice to get an array of procedure names & price numbers for a visitId, as shown below. Then if new procedures are added, they only affect the Procedure Service; Invoice Service need not change.

	GetVisitProceduresWithPrices(visitId) → Dict<string, decimal>

### Conclusion
While designing software, if we reduce coupling between modules, we make the design more modular, and we ensure that changes to one module do not affect other modules, or at least, the change cascade is limited, making changes low cost.

Thank you for reading! Please let me know your thoughts.

<em>Crossposted from https://decouplingsoftware.substack.com/p/a-decoupling-example</em>