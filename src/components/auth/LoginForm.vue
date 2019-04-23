<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      xs12
      sm6
      offset-sm3
    >
      <v-form
        v-on:submit.prevent
        ref="form"
        v-model="valid"
      >
        <v-card>
          <v-card-text>
            <v-alert
              :value="alert"
              type="error"
            >{{ $t(errorMsg) }}</v-alert>
            <v-text-field
              v-model="auth.email"
              :counter="10"
              :label="$t('auth.email')"
              :error-messages="errors.collect('email')"
              data-vv-name="email"
              :data-vv-as="`'${$t('auth.email')}''`"
              v-validate="'required'"
              @input="$validator.validate('email')"
              @blur="$validator.validate('email')"
              required
            ></v-text-field>
            <v-text-field
              v-model="auth.password"
              :append-icon="showpass ? 'visibility_off' : 'visibility'"
              :type="showpass ? 'text' : 'password'"
              name="input-10-1"
              :label="$t('auth.password')"
              counter
              @click:append="showpass = !showpass"
              :error-messages="errors.collect('password')"
              data-vv-name="password"
              :data-vv-as="`'${$t('auth.password')}''`"
              v-validate="'required'"
              @input="$validator.validate('password')"
              @blur="$validator.validate('password')"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn
              type="submit"
              @click="submit"
              :disabled="(auth.email === '') || ((!dirty) || (!valid))"
              flat
            >{{ $t('auth.login') }}</v-btn>
            <v-btn
              @click="register"
              flat
            >{{ $t('auth.register') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator'
import { Route } from 'vue-router'
import VeeValidate from 'vee-validate'
import users from '../../store/users.module'

@Component({})
export default class LoginForm extends Vue {
  private valid = false
  private auth = {
    email: '',
    password: ''
  }
  private showpass = false
  private alert = false
  private errorMsg = ''

  get dirty() {
    return this.$validator.fields.items.some((field: any) => field.flags.dirty)
  }

  private register() {
    this.$router.push('/register')
  }

  private async submit() {
    await users.login(this.auth)
    if (!users.error) {
      if (this.$route.query && this.$route.query.next) {
        this.$router.push(this.$route.query.next as string)
      } else {
        this.$router.push('/')
      }
    } else {
      this.alert = true
      this.errorMsg = 'auth.Unauthorized'
    }
  }
}
</script>
