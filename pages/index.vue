<template>
  <div class="container">
    <!-- <h1>FCM push notifications.</h1> -->
    <a href="#" @click="authenticate">Login</a>
  </div>
</template>

<script>
import { getAuth, signInAnonymously } from 'firebase/auth'
import { getMessaging, onMessage, getToken } from 'firebase/messaging'
import { messaging } from '@/plugins/firebase'

export default {
  mounted() {
    const messaging = getMessaging()
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload)
    })
  },
  data() {
    return {}
  },
  methods: {
    async authenticate() {
      await signInAnonymously(getAuth())
      this.activate()
    },
    async activate() {
      const token = await getToken(messaging, {
        vapidKey:
          'BOT3xYrO97FSLq7_1flA0-tMBDSKnGcVEj6tgdDbZe98Cm_qTJ_HOvsEa9XyQPf9GJ_EZ6NFi51CIkI1x1eB0r4',
      })
      if (token) console.log(token)
    },
  },
}
</script>