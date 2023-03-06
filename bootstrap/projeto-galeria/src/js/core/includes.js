import $ from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback){
    if(!loadHtmlSuccessCallbacks.includes(callback)){
        console.log(callback)
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent){
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i,e){
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data){
                $(e).html(data)
                $(e).removeAttr('wm-include')
                console.log('teste')
                loadHtmlSuccessCallbacks.forEach(callback => callback(data))

                loadIncludes(e)
            }
        })
    })
}

//loadIncludesSemjquery()
loadIncludes()

function loadIncludesSemjquery(parent){
    if(!parent){
        parent = document.querySelectorAll('body [wm-include]')
    }else{
        parent = parent.querySelectorAll('[wm-include]')
    }
    parent.forEach(e => {
        console.log(parent)
        const url = e.getAttribute('wm-include')
        fetch(url)
            .then(resposta => resposta.text())
            .then(resp2 => e.innerHTML = resp2)
            .then(resp => e.removeAttribute('wm-include'))
            .then(resp => loadIncludesSemjquery(e))
            .catch(console.log)
    })

}