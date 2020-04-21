type ValidationKeys =
  | 'email'
  | 'password'
  | 'name'
  | 'limit'
  | 'amount'
  | 'description';

export const validateChecks = {
  methods: {
    $isRequired(key: ValidationKeys): boolean {
      return this.$isDirty(key) && !this.$v[key].required;
    },
    $isDirty(key: ValidationKeys): boolean {
      return this.$v[key].$dirty;
    },
    $isInvalid(key: ValidationKeys): boolean {
      return this.$isDirty(key) && this.$v[key].$invalid;
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
