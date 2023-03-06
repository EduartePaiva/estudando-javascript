//import $ from 'jquery'

function loadIncludes(parent){
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i,e){
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data){
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadIncludes(e)
            }
        })
    })
}

loadIncludesSemjquery()
//loadIncludes()

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
            .then(loadIncludesSemjquery(e))
            .catch(console.log)
    })

}