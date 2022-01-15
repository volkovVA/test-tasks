/* eslint-disable */
document.addEventListener('DOMContentLoaded', () => {

    const ajaxSend = async (formData) => {
        const fetchResp = await fetch('mail.php', {
            method: 'POST',
            body: formData
        });
        if (!fetchResp.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
        }
        return await fetchResp.text();
    };

    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        const modal = document.querySelector('.modal');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);

            ajaxSend(formData)
                .then((response) => {
                    console.log(response);
                    form.reset();
                })
                .catch((err) => console.error(err));
        });
    });
  });
