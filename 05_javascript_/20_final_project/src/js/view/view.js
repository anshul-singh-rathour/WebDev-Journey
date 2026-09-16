import icons from 'url:../../img/icons.svg';

export default class View{
    _data ;

    render(data,render=true ){
        if (!data ||(Array.isArray(data) && data.length===0)) return this.viewError();
        this._data = data;
        const html = this._generateHtml();
        if (!render) return html;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", html);
    }

    _clear (){
         this._parentElement.innerHTML='';
    }

    renderSpinner(){
       const html =`<div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div> `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin',html);
    }
    
    update(data){
        this._data = data;
        const newHtml = this._generateHtml();
        const newDom = document.createRange().createContextualFragment(newHtml);
        const newElement = Array.from(newDom.querySelectorAll('*'));
        const currElement =Array.from(this._parentElement.querySelectorAll('*'));
        newElement.forEach((newEl,i)=>{
            const curEl = currElement[i];
            if (! newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue?.trim() !== ''){
                curEl.textContent = newEl.textContent;
            }
            if (!newEl.isEqualNode(curEl) ){
                Array.from(newEl.attributes).forEach(attr=>{curEl.setAttribute(attr.name,attr.value)});
            }
        });
    }
    viewError(message = this._errMessage){
        const html =`<div class="error">
                    <div>
                      <svg>
                        <use href="${icons}#icon-alert-triangle"></use>
                      </svg>
                    </div>
                    <p>${message}</p>
                  </div>`
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin',html);
    }
    
    viewMessage (message = this._message){
        const html =`<div class="message">
                    <div>
                      <svg>
                        <use href="${icons}#icon-smile"></use>
                      </svg>
                    </div>
                    <p>${message}</p>
                  </div>`
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin',html);
    }
    
}