import Swal from 'sweetalert2';

export function showLogin() {
  Swal.fire({
    title: `<span class="popup-alert__title">Thông báo</span>`,
    html: `
      <div class="popup-alert__content">
        <h5 class="popup-alert__message">Vui lòng đăng nhập để tham gia sự kiện</h5>
      </div>
    `,
    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: true,
    customClass: {
      popup: 'popup-alert popup-error'
    },
    showClass: {
      popup: 'animate__animated animate__fadeInDown animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp animate__faster'
    },
  });
}

export function showError(code, title = 'Lỗi') {
  let msg = '';

  switch (code) {
    default:
      msg = 'Hiện không thể thực hiện, vui lòng thử lại sau';
      break;
  }

  return Swal.fire({
    title: `<span class="popup-alert__title">${title}</span>`,
    html: `
      <div class="popup-alert__content">
        <h5 class="popup-alert__message">${msg}</h5>
      </div>
    `,
    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: true,
    closeButtonHtml: '<img src="/img/icon-close.png" title="Đóng" />',
    customClass: {
      popup: 'popup-alert popup-error'
    },
    showClass: {
      popup: 'animate__animated animate__fadeInDown animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp animate__faster'
    },
  })
}

export function showSuccess(code, title = 'Thông báo') {
  let msg = '';

  switch (code) {
    default:
      msg = 'Thực hiện thao tác thành công!';
      break;
  }

  return Swal.fire({
    title: `<span class="popup-alert__title">${title}</span>`,
    html: `
      <div class="popup-alert__content">
        <h5 class="popup-alert__message">${msg}</h5>
      </div>
    `,
    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: true,
    closeButtonHtml: '<img src="/img/icon-close.png" title="Đóng" />',
    customClass: {
      popup: 'popup-alert popup-success'
    },
    showClass: {
      popup: 'animate__animated animate__fadeInDown animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp animate__faster'
    },
  })
}

export function showConfirm(msg = '', btnCancel = null, title = 'Thông báo', btnConfirm = 'Xác nhận') {
  return Swal.fire({
    title: `<span class="popup-alert__title">${title}</span>`,
    html: `
      <div class="popup-alert__content">
        <h5 class="popup-alert__message">${msg}</h5>
      </div>
    `,
    confirmButtonText: btnConfirm,
    showCancelButton: btnCancel ? true : false,
    cancelButtonText: btnCancel,
    showCloseButton: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    showClass: {
      popup: 'animate__animated animate__fadeInDown animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp animate__faster'
    },
    customClass: {
      popup: 'popup-alert popup-confirm'
    },
  })
}

export function toObj(array, key) {
  var result = array.reduce(function(map, obj) {
    map[obj[key]] = obj;
    return map;
  }, {});

  return result;
}

export function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
}
