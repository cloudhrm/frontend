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
              v-model="auth.fullName"
              :counter="30"
              :label="$t('auth.fullName')"
              :error-messages="errors.collect('fullname')"
              data-vv-name="fullname"
              :data-vv-as="`'${$t('auth.fullName')}''`"
              v-validate="'required'"
              @input="$validator.validate('fullname')"
              @blur="$validator.validate('fullname')"
              required
            ></v-text-field>
            <v-text-field
              v-model="auth.email"
              :counter="100"
              :label="$t('auth.email')"
              :error-messages="errors.collect('email')"
              data-vv-name="email"
              :data-vv-as="`'${$t('auth.email')}''`"
              v-validate="'required|email'"
              @input="$validator.validate('email')"
              @blur="$validator.validate('email')"
              required
            ></v-text-field>
            <v-text-field
              v-model="auth.username"
              :counter="30"
              :label="$t('auth.username')"
              :error-messages="errors.collect('username')"
              data-vv-name="username"
              :data-vv-as="`'${$t('auth.username')}''`"
              v-validate="'required'"
              @input="$validator.validate('username')"
              @blur="$validator.validate('username')"
              required
            ></v-text-field>
            <v-text-field
              v-model="auth.password"
              :append-icon="showpass ? 'visibility_off' : 'visibility'"
              :type="showpass ? 'text' : 'password'"
              ref="password"
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
            <v-text-field
              v-model="auth.password2"
              :append-icon="showpass2 ? 'visibility_off' : 'visibility'"
              :type="showpass2 ? 'text' : 'password'"
              :label="$t('auth.password2')"
              counter
              @click:append="showpass2 = !showpass2"
              :error-messages="errors.collect('password2')"
              data-vv-name="password2"
              :data-vv-as="`'${$t('auth.password2')}''`"
              v-validate="'required|confirmed:password'"
              @input="$validator.validate('password2')"
              @blur="$validator.validate('password2')"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn
              type="submit"
              @click="submit"
              :disabled="(!dirty) || (!valid)"
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

@Component({})
export default class RegisterForm extends Vue {
  @Inject('$validator') public $validator!: any
  private valid = false
  private auth = {
    fullName: '',
    email: '',
    username: '',
    password: '',
    password2: ''
  }
  private showpass = false
  private showpass2 = false
  private alert = false
  private errorMsg = ''

  get dirty() {
    return this.$validator.fields.items.some((field: any) => field.flags.dirty)
  }

  private async submit() {
    // await users.register(this.auth)
    // if (!users.error) {
    //   if (this.$route.query && this.$route.query.next) {
    //     this.$router.push(this.$route.query.next as string)
    //   } else {
    //     this.$router.push('/login')
    //   }
    // } else {
    //   this.alert = true
    //   this.errorMsg = 'auth.regfail'
    // }
  }
}
</script>
