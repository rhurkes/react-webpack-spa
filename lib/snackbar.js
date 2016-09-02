let notification;

const snackbar = {
  show: options => {
    if (!options) return;
    if (!notification) {
      notification = document.querySelector('.mdl-js-snackbar');
    }
    if (!notification) return;

    notification.MaterialSnackbar.showSnackbar({
      message: options.message
    });
  }
};

export default snackbar;
