
## Factory design pattern

  

The Factory pattern is a creational pattern that provides a template that can be used to create objects. It is used in complex situations where the type of the object required varies and needs to be specified in each case.

  

It does not use the new keyword directly to instantiate objects. This means that it does not explicitly require the use of a constructor to create objects. Instead, it provides a generic interface that delegates the object creation responsibility to the corresponding subclass.

  

## Overview

The classes `Car` and `Truck` implement interface `Vehicle`. The object creation for each type of vehicle happens via `VehicleFactory` thereby keeping client independent of object creation.

## Benefits of This Implementation

1. **Flexibility**: Adding a new vehicle type is easy. We can introduce a new class and add the same to `VehicleFactory`.
2. **Open/Closed Principle**: The system is open for extension (new document types) but closed for modification.
3.  **Decoupling**: The client code works with the `VehicleFactory`, not concrete implementations.


## How to run

    bun install
    bun run index.ts
