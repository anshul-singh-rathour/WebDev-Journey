import * as model from './model.js' 
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchViews.js';
import 'core-js/stable' 
import 'regenerator-runtime/runtime'
import resultView from './view/resultViews.js';
import paginationView from './view/paginatonView.js'
import bookmarksView from './view/bookmarksView.js'
import addNewRecipe from './view/addNewRecipe.js';

if(module.hot){
    module.hot.accept();
}

const controlRecipe = async function () {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        recipeView.renderSpinner();
        resultView.update(model.getResultPage());
        // bookmarksView.update(model.state.bookmarks);
        // load recipe
        await model.loadRecipe(id);
        // render recipe
        recipeView.render(model.state.recipe);
    } catch (err) {
        console.log(err);
        recipeView.viewError();
    }
};

const controlSearchResults = async function () {
    try{
        resultView.renderSpinner();
        const query = searchView.getQuery();
        if(!query) return
       await model.loadSearchResults(query);
       resultView.render(model.getResultPage());
       paginationView.render(model.state.search);
    }catch(err){
        console.log(err);
        resultView.viewError();
    }
}

const controlPagination = function (gotopage){
   resultView.render(model.getResultPage(gotopage));
    paginationView.render(model.state.search);
}

const controlServings = function(newServ){
    // update data
    model.updateServings(newServ);
    // update view
    recipeView.update(model.state.recipe);

}
const controlBookmark = function(){
    if (!model.state.recipe.bookmark){
        model.addBookmark(model.state.recipe);
    }
   else{
        model.removeBookmark(model.state.recipe.id );
   }
    recipeView.update(model.state.recipe);   
    bookmarksView.render(model.state.bookmarks) ;
}

const controlBookmarkrender = function(){
    bookmarksView.render(model.state.bookmarks);
}  


const controlAddRecipe = async function (newRecipe) {
  try {
    addNewRecipe.renderSpinner();

    await model.uploadRecipe(newRecipe);
    // Render recipe
    recipeView.render(model.state.recipe);
    // Success message
    addNewRecipe.viewMessage();
    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);
    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    // Close form window
    setTimeout(function () {
      addNewRecipe.toggler();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    addNewRecipe.viewError(err.message);
  }
};

const init = function () {
    bookmarksView.addHandlerRender(controlBookmarkrender);
    recipeView.addHandlerRender(controlRecipe);
    recipeView.addHandlerUpdateServings(controlServings);
    recipeView.addHandlerBookmark(controlBookmark);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
    addNewRecipe.addHandlerUpload(controlAddRecipe);
};

init();