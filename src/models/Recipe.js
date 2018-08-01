import { types, flow, applySnapshot } from "mobx-state-tree";
import uuid from "uuid/v4";

import request from "../utils/request";

export const Recipe = types.model("Recipe", {
  id: types.string,
  label: types.string,
  image: types.string
});

const Recipes = types
  .model("Recipes", {
    list: types.optional(types.array(Recipe), [])
  })
  .actions(self => ({
    afterCreate() {
      self.hyrdate();
    },
    hyrdate: flow(function*() {
      try {
        const recipes = (yield request.get()).map(
          ({ recipe: { label, image } }) => ({
            id: uuid(),
            label,
            image
          })
        );

        console.log(recipes);

        applySnapshot(self.list, recipes);
      } catch (error) {
        console.log(error);
      }
    })
  }));

export default Recipes;
