namespace NamespaceA {
    class A {
        aname: string = 'A';
    }
    class B {
        bname: string = 'B';
    }

    const a = new A();
    const b = new B();

    const c = { ...a, ...b }
    const d = Object.assign(a, b);
    console.log(c);
    console.log(d);
    
    a.aname = 'a1';
    console.log(c);
    console.log(d);
}

/*
As you can see, c has both aname and bname properties but is a unique object
unto itself. However, d is actually object a with the properties of object b,
which is demonstrated by the aname variable being equal to a1 after a.aname = 'a1' was set.
*/