define ('wiring', ['./amd'], function (amd)
{ 
        document.getElementById('mybutton').addEventListener('click', amd.updateSum); 
        return;
})

 wiring();