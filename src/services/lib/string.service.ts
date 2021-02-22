class StringServices {
  constructor(private str: string) {}

  apply(): string {
    return this.str;
  }

  uppercaseFirst(): this {
    this.str = `${this.str.charAt(0).toUpperCase()}${this.str.slice(1)}`;
    return this;
  }

  lowercaseFirst(): this {
    this.str = `${this.str.charAt(0).toLowerCase()}${this.str.slice(1)}`;
    return this;
  }

  firstSplit(split: string = ""): this {
    this.str = this.str.split(split).shift();
    return this;
  }

  lastSplit(split: string = ""): this {
    this.str = this.str.split(split).pop();
    return this;
  }

  formKebabToPascal(): this {
    this.str = new StringServices(this.str)
      .uppercaseFirst()
      .apply()
      .replace(/-(\w)/g, (match, group) => group.toUpperCase());
    return this;
  }
}

export default StringServices;
