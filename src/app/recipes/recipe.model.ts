// We will declare a TS class here
// This will be a blueprint for objects
// that we create. Our definition goes here
export class Recipe {
  // our recipe name will be publicly available
  // name after the 'public' keyword is the name
  // of the property then proceeded by ':' and
  // then what type the property will be
  // general syntax for a publicly available
  // property is public 'name': type
  public name: string;
  public description: string;
  public imagePath: string;

  // pass the property names as parameters into the constructor
  // a constructor is a built-in function every class has and
  // which will be executed once you create a new instance of
  // that class
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }

}
