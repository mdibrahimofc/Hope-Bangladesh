

document.getElementById('donate-submit-noakhali').addEventListener('click', function () {
    const mainBalance = textNumber('main-balance');
    const noakhaliBalance = textNumber('noakhali-balance');
    const noakhaliValue = inputValue('donate-amount-noakhali');
    const noakhaliDonate = parseFloat(noakhaliValue);

    // check validation for donate amount
    if(noakhaliDonate < 0 || typeof noakhaliDonate !== 'number' || noakhaliDonate > mainBalance){
        alert('Enter a valid amount to proceed with the donation.');
        return
    }else{
        alert('Congratulations! Your donation has been successfully processed.')
    }

    const updateNoakhaliBalance = noakhaliBalance + noakhaliDonate;
    const updateMainBalance = mainBalance - noakhaliDonate;
    document.getElementById('main-balance').textContent = updateMainBalance;
    document.getElementById('noakhali-balance').textContent = updateNoakhaliBalance;
    document.getElementById('donate-amount-noakhali').value = '';
    console.log({ mainBalance, noakhaliBalance, noakhaliDonate, updateMainBalance, updateNoakhaliBalance });
})


