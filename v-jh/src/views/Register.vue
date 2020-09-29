<template>
  <div>
    <div class="grey darken-1 empty-layout">
      <form class="card auth-card" @submit.prevent="submitHandler">
        <div class="card-content">
          <span class="card-title">Домашняя бухгалтерия</span>
          <div class="input-field">
          <input id="email" type="text" v-model.trim="email" :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"/>
          <label for="email">Email</label>
          <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required">e-mail field sholdn't be void</small>
          <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.email">Input correct e-mail</small>
        </div>
        <div class="input-field">
          <input id="password" type="password" class="validate" v-model.trim="password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"/>
          <label for="password">Пароль</label>
          <small class="helper-text invalid" v-if="$v.password.$dirty && !$v.password.required">input a password</small>
          <small class="helper-text invalid" v-else-if="$v.password.$dirty && !$v.password.minLength">password should contain more then {{$v.password.$params.minLength.min}} signs. Current count of password is {{password.length}}</small>
        </div>
        <div class="input-field">
          <input id="password" type="password" class="validate" v-model.trim="name"
          :class="{invalid: ($v.name.$dirty && !$v.name.required)}"/>
          <label for="name">Имя</label>
          <small class="helper-text invalid" v-if="$v.name.$dirty && !$v.name.required">Input a name</small>
        </div>
          <p>
            <label>
              <input type="checkbox" v-model="checkbox" :class="{invalid: $v.checkbox.$dirty && !$v.checkbox.agree}"/>
              <span>С правилами согласен</span>
            </label>
          </p>
        </div>
        <div class="card-action">
          <div>
            <button class="btn waves-effect waves-light auth-submit" type="submit">
              Зарегистрироваться
              <i class="material-icons right">send</i>
            </button>
          </div>

          <p class="center">
            Уже есть аккаунт?
            <router-link to="/login">Войти!</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
    name: '',
    checkbox: false
  }),
  methods: {
    submitHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      console.log(formData)
      this.$router.push('/')
    }
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required },
    checkbox: { agree: v => v }
  }
}
</script>
