type ValidationKeys = 'email' | 'password' | 'name' | 'limit';

export const validateChecks = {
  methods: {
    $isRequired(key: ValidationKeys): boolean {
      return !this.$v[key].required;
    },
    $isDirty(key: ValidationKeys): boolean {
      return this.$v[key].$dirty;
    },
    $isInvalidForm(): boolean {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return true;
      }
      return false;
    },
  },
};
