Window

It is Provided by Browser Js Engine. It is top-level, root-level, global Objects in Browser env. Env. It is in the form of js Object itself. It contains many built-in constructor/methods and properties along with its own [prototype].It's all constructor/methods and properties can be globally accissible. Object is one of them which can be globally accessible. We can see all the built-in properties and methods of windows in the Browser console.

Constructor

Constructor in js are used to create code reusable. The Browser window has created many methods/properties in the form of constructor. So we can create an instance of a built-in constructor. Object() is a built-in constructor/method of the Browser window.

So there are Two types of constructor:
Build in constructor
User defined constructor
Object()

It is one built-in constructor/method of the window. So we can create its instances too or reuse mang times using the `new` keyword and return an empty object //{} .We can see all properties and methods in the browser console of its [prototype]. It contains constructor too to make its methods/property reuseable.

Syntax:
Object or Object() // in console

[prototype]

It holds and inherits all the built in properties and user created properties and methods of an Object in js one another. If we create any instances of Object in js then the Browser window provides [prototype] access to all the properties/methods.It means every object we created in js becomes an instance of the main-root built-in object.So there is sharing of [prototype] in each object.That’s we can see [prototype chain] of Objects in Browser console.

Shadowing Property
It is the process of searching and finding a property of an object among itself’s properties, [prototype] or [prototype chain].

It have property searching process:
Search on itself’s properties. (if not found).
Search on its own [prototype] (if again not found).
Search on [prototype chain].(if again not found).
Continue until [prototype] value become null
Finally return undefined
But if Search property is found with the same name which is also present in its [prototype] or [prototype chain] then search property returns with the value of which is present or found first which we call Shadowing property.

Setting property

Property of an object can be set inside the [prototype] by using two methods:
1 . Object.create() 2. Object.assign()
