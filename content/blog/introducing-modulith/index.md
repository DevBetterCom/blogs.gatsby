---
title: "Introducing Modulith"
author: davidc
date: "2022-08-03T00:00:00.000Z"
description: "A templating tool for Modular Monoliths in .Net"
featuredImage: ./modulith-cover.png
category: software-development
---

# Introducing Modulith: Simplify Modular Monolith Development

If you’ve been following software architecture trends, you know that microservices often steal the spotlight. But for many teams, a **modular monolith** can offer a more straightforward, yet still powerful, approach to building large applications. That’s where **Modulith** comes in—an open-source project designed to streamline the creation and management of modular monoliths.

## What’s a Modular Monolith and Why Should You Care?

A modular monolith is a single application divided into distinct, well-defined modules, each encapsulating specific functionality. This makes the codebase easier to understand, maintain, and test. Unlike a tightly coupled BBM (Bug Ball of Mud) monolith, a modular monolith offers clear boundaries and separation of concerns without the overhead of managing distributed systems like microservices.

While microservices achieve boundaries through physical separation, a modular monolith avoids operational overhead by using a single solution for all modules. To achieve modularity, we can use .NET projects and C# access modifiers to separate a module’s public interface (Contracts) from its internals. This ensures that other modules can’t reference internal types.

Let's imagine we are developing an e-commerce application called, you guessed it, eShop. We identified at least a Payments and a Shipments module. Let's use projects and acccess modifiers to build a modular monolith.

First, we create a separate project for the Payments module internals and declare all its types as ```internal```. This way other modules will not be able to reference the module's internal types. 

```
eShop/
    |--- eShop.EntryPoint <-- Original Project (Contains the program.cs, appsettings, etc.)
    |--- eShop.PaymentsModule
            |--- eShop.Payments.Contracts
```

Then, we create a ```Contracts``` project to define the public interface so that other modules can depend on our ```Contracts``` module and not be concerned with our internal project. This ensures that references between modules are only introduced through well-defined, public interfaces, enforcing clear boundaries and eliminating the risk of unwanted dependencies.

```
eShop/
    |--- eShop.EntryPoint <-- Original Project
    |--- eShop.PaymentsModule
            |--- eShop.Payments.Internal
            |--- eShop.Payments.Contracts
```

We can also extend modularity to our tests by introducing a single test project per module. This way we can also organize our tests to target a specific module.

```
eShop/
    |--- eShop.EntryPoint <-- Original Project (Contains the program.cs, appsettings, etc.)
    |--- eShop.PaymentsModule
            |--- eShop.Payments.Internal
            |--- eShop.Payments.Contracts
            |--- eShop.Payments.Tests
```

We have achieved modularity and not inccurred in any of the challenges of a distributed application. We have one solution, one repo, and all modules can be tested independently and debugged in a single solution. 

However we did so at the expense of creating 3 projects per module. And we didn't even mentioned setting the correct reference between prrojects. How can we make this process faster and repeateable?

## Enter Modulith

Developed in conjucntion with [Ardalis](https://github.com/ardalis), Modulith automates much of the setup you’d typically have to do manually when building a modular monolith.

With Modulith, you can add a new module to your project with a single command. It takes care of creating the necessary projects, adding the correct dependencies, and registering services for you. This allows you to focus on what really matters, building features. This is specially useful when working in a team. Modulith provides an easy way to set up new modules without worrying about the repetitive tasks involved in setting them up.

### Let's see this in action

Creating a new modular solution is as simple as running:
```ps
dotnet new modulith -n eShop --with-module Payments
```
This creates a solution, __eShop__, with a single module __Payments__. Then you can add new modules running
```ps
cd eShop # CD into the solution folder

dotnet new modulith --add basic-module --with-name Shipments --to eShop
```
That's it now you have a solution with two modules. You can add new modules by running the last command and changing the ```--with-name``` to the name of your new module. But what was created exactly?

Glad you asked, these three commands created 9 projects. Now that is a lot of projects. 

And that’s just the beginning. **Modulith** has plans to offer various types of module templates to suit different architectural needs. For example, you might create one module using a 3-layer architecture, another using a Domain-Driven Design (DDD) template, and yet another that’s optimized for reading from a document database for reporting purposes. These templates will provide flexibility while maintaining consistency across your application.

## Beyond Modules: Item Templates

But **Modulith** doesn’t stop at creating entire modules. A second set of features focuses on **item templates**. These templates don’t create whole modules but instead add a set of classes to help you implement specific patterns within your modules. For instance, one such item template could generate a set of CRUD endpoints and a repository for a new domain entity. While you’ll still need to tailor the generated code to your specific needs, the initial creation of classes will be incredibly fast and consistent, reducing repetitive tasks.

## Why Use Modulith?

If you’re a developer who wants to spend less time on boilerplate setup and more time on building valuable features, **Modulith** is for you. It simplifies the creation and management of modular monoliths, letting you focus on your application’s logic instead of the intricacies of project structure and dependency management.

Ready to dive in? Head over to the [Modulith GitHub repository](https://github.com/ardalis/modulith) to get started. Whether you’re new to modular monoliths or a seasoned pro, Modulith can help you build better systems, faster.