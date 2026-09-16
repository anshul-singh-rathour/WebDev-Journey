import icons from 'url:../../img/icons.svg';
import View from './view.js';
import previewView from './previewView.js';

class ResultView extends View {
    _parentElement = document.querySelector('.results');
    _errMessage = 'No recipe found for your query'
    _message = '';

    _generateHtml() {
        return this._data.map(el => previewView.render(el,false)).join('');
    }
}

export default new ResultView();