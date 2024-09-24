
    // noakhali flood card functionality


document.getElementById('donate-submit-noakhali').addEventListener('click', function () {
    const mainBalance = textNumber('main-balance');
    const noakhaliBalance = textNumber('noakhali-balance');
    const noakhaliDonate = inputNumber('donate-amount-noakhali'); 

    // check validation for donate amount
    if(noakhaliDonate <= 0 || isNaN(noakhaliDonate) || noakhaliDonate > mainBalance){
        alert('Enter a valid amount to proceed with the donation.');
        return
    }else{
        document.getElementById('modal').classList.remove('hidden')

    }

    const updateNoakhaliBalance = noakhaliBalance + noakhaliDonate;
    const updateMainBalance = mainBalance - noakhaliDonate;
    document.getElementById('main-balance').textContent = updateMainBalance;
    document.getElementById('noakhali-balance').textContent = updateNoakhaliBalance;
    document.getElementById('donate-amount-noakhali').value = '';
    console.log({ mainBalance, noakhaliBalance, noakhaliDonate, updateMainBalance, updateNoakhaliBalance });
})

    // feni flood card functionaliy 


document.getElementById('donate-submit-feni').addEventListener('click', function () {
    const mainBalance = textNumber('main-balance');
    const noakhaliBalance = textNumber('feni-balance');
    const noakhaliDonate = inputNumber('donate-amount-feni'); 

    // check validation for donate amount
    if(noakhaliDonate <= 0 || isNaN(noakhaliDonate) || noakhaliDonate > mainBalance){
        alert('Enter a valid amount to proceed with the donation.');
        return
    }else{
        document.getElementById('modal').classList.remove('hidden')

    }

    const updateNoakhaliBalance = noakhaliBalance + noakhaliDonate;
    const updateMainBalance = mainBalance - noakhaliDonate;
    document.getElementById('main-balance').textContent = updateMainBalance;
    document.getElementById('feni-balance').textContent = updateNoakhaliBalance;
    document.getElementById('donate-amount-feni').value = '';
    console.log({ mainBalance, noakhaliBalance, noakhaliDonate, updateMainBalance, updateNoakhaliBalance });
})

    // quota movement card functionality 


document.getElementById('donate-submit-quota').addEventListener('click', function () {
    const mainBalance = textNumber('main-balance');
    const noakhaliBalance = textNumber('quota-balance');
    const noakhaliDonate = inputNumber('donate-amount-quota'); 

    // check validation for donate amount
    if(noakhaliDonate <= 0 || isNaN(noakhaliDonate) || noakhaliDonate > mainBalance){
        alert('Enter a valid amount to proceed with the donation.');
        return
    }else{
        document.getElementById('modal').classList.remove('hidden')

    }

    const updateNoakhaliBalance = noakhaliBalance + noakhaliDonate;
    const updateMainBalance = mainBalance - noakhaliDonate;
    document.getElementById('main-balance').textContent = updateMainBalance;
    document.getElementById('quota-balance').textContent = updateNoakhaliBalance;
    document.getElementById('donate-amount-quota').value = '';
    console.log({ mainBalance, noakhaliBalance, noakhaliDonate, updateMainBalance, updateNoakhaliBalance });
})


// close modal functionality is here 

document.getElementById('close-modal').addEventListener('click', function(){
    document.getElementById('modal').classList.add('hidden')
})


