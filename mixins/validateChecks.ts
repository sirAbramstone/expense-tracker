type ValidationKeys = 'email' | 'password' | 'name' | 'limit';

export const validateChecks = {
  methods: {
    $isRequired(key: ValidationKeys): boolean {
      return !this.$v[key].required;
    },
    $isDirty(key: ValidationKeys): boolean {
      return this.$v![key].$dirty;
    },
  },
};
