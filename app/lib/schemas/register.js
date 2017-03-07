import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
  confirmPassword: {
    type: String,
    label: 'Enter the password again',
    custom() {
      if (this.value !== this.field('password').value) {
        return 'passwordMismatch';
      }
    },
    uniforms: {
      type: 'password',
    },
  },
})
;
