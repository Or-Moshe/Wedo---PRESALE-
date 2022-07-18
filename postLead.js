function postLeadToSFDC() {
    debugger;
    const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
    };
  
    const oid = document.getElementById('oid').value;
    const retUrl = document.getElementById('retURL').value;
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    fetch(
      `https://we1656937748573.my.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&oid=${oid}&retURL=${retUrl}&first_name=${firstName}&last_name=${lastName}&company=${company}&email=${email}&phone=${phone}}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log('**result:', result))
      .catch((error) => console.error('**error', error));
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit-button').addEventListener('onclick', () => {
      postLeadToSFDC();
    });
  });