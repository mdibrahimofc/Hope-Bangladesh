document.getElementById('history').addEventListener('click', function(){
    id('history').classList.add('bg-lime-500');
    id('history').classList.remove('border', 'border-black');
    id('donation').classList.add('border', 'border-black');
    id('donation').classList.remove('bg-lime-500');
    id('main').classList.add('hidden');

})

document.getElementById('donation').addEventListener('click', function(){
    id('history').classList.remove('bg-lime-500');
    id('history').classList.add('border', 'border-black');
    id('donation').classList.remove('border', 'border-black');
    id('donation').classList.add('bg-lime-500');
    id('main').classList.remove('hidden');

})