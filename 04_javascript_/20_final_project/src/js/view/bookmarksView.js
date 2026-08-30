import icons from 'url:../../img/icons.svg';
import View from './view.js';
import previewView from './previewView.js';

class BookmarksView extends View {
    _parentElement = document.querySelector('.bookmarks__list');
    _errMessage = 'No Bookmarks yet'
    _message = '';

    addHandlerRender(handler){
        window.addEventListener('load',handler)
    }
    _generateHtml() {
        return this._data.map(el => previewView.render(el,false)).join('');
    }
}

export default new BookmarksView();