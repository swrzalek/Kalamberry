<template>
    <div
            id="e3"
            style="max-width: 400px; margin: auto; min-height: 820px; min-width: 400px;"

    >
        <v-card>
            <v-container
                    fluid
                    grid-list-lg
                    class="grad"
                    style="min-height: 600px"
            >
                <v-layout row wrap>
                    <h4 class="text-md-center headline">StartScreen</h4>
                    <v-flex xs12>
                        <form>
                            <v-text-field
                                    v-model="name"
                                    v-validate="'required|max:10'"
                                    :counter="10"
                                    label="Name"
                                    data-vv-name="name"
                                    required
                            ></v-text-field>
                            <v-flex xs12>
                                <v-subheader class="pl-0 mb-1">Rounds</v-subheader>
                                <v-slider
                                        v-model="slider"
                                        thumb-label="always"
                                ></v-slider>

                            </v-flex>
                            <v-card flat color="transparent">
                            <v-card-text>
                                <v-slider
                                        v-model="fruits"
                                        :tick-labels="timeLabels"
                                        :max="3"
                                        step="1"
                                        ticks="always"
                                        tick-size="2"
                                ></v-slider>
                            </v-card-text>
                             </v-card>
                            <v-radio-group v-model="radioGroup">
                                <v-radio
                                        v-for="n in 3"
                                        :key="n"
                                        :label="`Radio ${n}`"
                                        :value="n"
                                ></v-radio>
                            </v-radio-group>
                            <v-btn
                                    :disabled="!valid"
                                    color="success"
                                    @click="validate"
                            >
                                Validate
                            </v-btn>
                            <v-btn
                            to="/main"
                            >
                                Next
                            </v-btn>

                        </form>
                    </v-flex>

                </v-layout>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "StartScreen",
        data: () => ({
            value: 0,
            fruits: 0,
            timeLabels: [
                '1:00',
                '2:00',
                '3:00',
                '4:00',
                '5:00',
            ],
            radioGroup: 1,
        }),

    }
</script>

<style scoped>

</style>
