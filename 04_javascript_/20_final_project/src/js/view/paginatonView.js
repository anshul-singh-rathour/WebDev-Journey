import icons from 'url:../../img/icons.svg';
import View from './view.js';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('.btn--inline');
            if (!btn) return
            const gotopage = +btn.dataset.goto;
            handler(gotopage);
        })
    }

    _generateHtml() {
        const currpage = this._data.page;
        const totalPages = Math.ceil(this._data.results.length / this._data.resultPerPage);
        // page 1 with more pages
        if (currpage === 1 && totalPages > 1) {
            return this._generatemarkupbutton(currpage);
        }
        // last page
        if (currpage === totalPages && totalPages > 1) {
            return this._generatemarkupbutton(currpage, 'prev');
        }
        // middle pages
        if (currpage < totalPages) {
            return `${this._generatemarkupbutton(currpage, 'prev')}
             ${this._generatemarkupbutton(currpage)}`
        }
        // page 1 without other pages
        return ''
    }

    _generatemarkupbutton(currpage, side = 'next') {
        if (side === 'prev') {
            return `
      <button data-goto="${currpage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currpage - 1}</span>
      </button>
    `;
        }

        return `
    <button data-goto="${currpage + 1}" class="btn--inline pagination__btn--next">
      <span>Page ${currpage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
  `;
    }
}

export default new PaginationView();