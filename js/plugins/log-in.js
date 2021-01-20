const createModel = (options) => {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin', 
    `
    <div class="modal__overlay" data-close="true">
        <div class="log-in-modal">
            <svg data-close="true" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path  data-close="true" d="M8.28288 7.01132L13.7342 1.55983C14.089 1.20523 14.089 0.631897 13.7342 0.2773C13.3796 -0.0772966 12.8063 -0.0772966 12.4517 0.2773L7.00018 5.72879L1.54885 0.2773C1.19408 -0.0772966 0.620915 -0.0772966 0.266317 0.2773C-0.0884468 0.631897 -0.0884468 1.20523 0.266317 1.55983L5.71765 7.01132L0.266317 12.4628C-0.0884468 12.8174 -0.0884468 13.3907 0.266317 13.7453C0.443034 13.9222 0.675391 14.0111 0.907582 14.0111C1.13977 14.0111 1.37196 13.9222 1.54885 13.7453L7.00018 8.29384L12.4517 13.7453C12.6286 13.9222 12.8608 14.0111 13.093 14.0111C13.3251 14.0111 13.5573 13.9222 13.7342 13.7453C14.089 13.3907 14.089 12.8174 13.7342 12.4628L8.28288 7.01132Z" fill="#918D9A"/>
              </g>
                <defs>
               <clipPath id="clip0">
               <rect width="14" height="14" fill="white" transform="translate(0.000244141)"/>
              </clipPath>
             </defs>
           </svg>
           <div class="log-in-modal__title title">Авторизация</div>
           <div class="log-in-modal__subtitle subtitle">E-mail</div>
           <div class="log-in-modal__input">
                <input type="text" placeholder="Введите e-mail">
            </div>
            <div class="log-in-modal__subtitle subtitle">Пароль</div>
            <div class="log-in-modal__input">
                <input type="text" placeholder="Введите пароль">
            </div>
            <button>Войти</button>
        </div>
    </div>
    `)
    document.body.appendChild(modal)
    return modal
}

$.logIn = function(options){

    const _modal = createModel(options)


    const modal = {
        open(){
            _modal.classList.add('open')
        },
        close(){
            _modal.classList.remove('open')
        }
    }
    _modal.addEventListener('click', event => {
        if(event.target.dataset.close){
            modal.close()
        }
    })
    return modal
}