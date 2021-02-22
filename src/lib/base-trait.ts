import BaseModel from "./base-model";
import { Newable } from "./types";

abstract class BaseTrait {
    abstract register<TModel extends BaseModel>(Model: Newable<TModel>): void;
}

export default BaseTrait;
