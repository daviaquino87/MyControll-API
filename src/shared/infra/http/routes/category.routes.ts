import { Router } from "express";

import { CreateCategoryController } from "../../../../modules/category/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../../../../modules/category/useCases/listCategories/ListCategoriesController";

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

export const categoryRoutes = Router();

categoryRoutes.post("/", createCategoryController.handle);
categoryRoutes.get("/", listCategoriesController.handle);
