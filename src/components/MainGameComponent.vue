<template>
    <div
            id="e3"
            style="max-width: 400px; margin: auto; min-height: 820px;"

    >
        <v-card>
            <v-container
                    class="grad-top"
            >
                <v-layout row wrap>
                    <v-flex xs12>
                        <p class="subheading font-weight-regular white--text text-sm-left" ><strong>Kto gra ?</strong>  Player1</p>


                        <v-divider light> </v-divider>
                        <v-flex mt-4>
                            <v-card
                                    class="mx-auto rounded-card"
                                    color="#26c6da"
                                    dark
                                    max-width="400"
                                    min-height="80"
                            >


                                <v-card-text class="headline font-weight-bold">
                                    {{showingWord}}
                                </v-card-text>


                            </v-card>

                        </v-flex>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container
                    fluid
                    grid-list-lg
                    class="grad"
                    style="min-height: 600px"
            >
                <v-layout row wrap>
                    <v-flex xs6>
                        <v-card  v-on:click="addPoint" class="pt-4 rounded-card indigo darken-2" dark color="secondary" min-height="150px">
                            <v-avatar color="teal">
                                <span class="white--text headline">C</span>
                            </v-avatar>
                            <v-card-text class="px-0">Correct!</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs6>
                        <v-card class="pt-4 rounded-card indigo darken-2" dark color="secondary" min-height="150px">
                            <v-avatar color="red">
                                <span class="white--text headline">W</span>
                            </v-avatar>
                            <v-card-text class="px-0">Wrong !</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <div>
                            <h6 class="title white--text text-xs-left">Czas</h6>
                            <v-btn type="button" class="btn btn-secondary" :disabled="counting" @click="startCountdown">
                                <countdown v-if="counting" :time="60000" @end="handleCountdownEnd">
                                    <template slot-scope="props">Fetch again {{ props.totalSeconds }} seconds later</template>
                                </countdown>
                                <span v-else>Fetch Verification Code</span>
                            </v-btn>
                            <v-progress-linear
                                    v-model="time"
                                    color="amber"
                                    height="25"
                                    reactive
                                    value="25"
                                    stream

                            ></v-progress-linear>
                        </div>
                    </v-flex>
                    <v-flex xs12>
                        <div>
                            <h6 class="title white--text text-xs-left">Pominięcia</h6>
                            <v-progress-linear
                                    v-model="skips"
                                    color="teal"
                                    height="25"
                                    reactive
                                    value="25"
                            ></v-progress-linear>
                        </div>
                    </v-flex>
                    <v-flex xs12>
                        <div>
                            <h6 class="title white--text text-xs-left">Punkty</h6>
                            <v-progress-linear
                                    v-model="points"
                                    color="blue"
                                    height="25"
                                    reactive
                                    value="25"
                            ></v-progress-linear>
                        </div>
                    </v-flex>



                </v-layout>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    import countdown from '@chenfengyuan/vue-countdown';
    export default {
        components:{ countdown},
        timers: {
            log:{ time: 1000, autostart: true}
        },
        name: "MainGameComponent",
        data: () => ({
            players: [
                {name: "Player1", skips:5 , points:0},
                {name: "Player2", skips:5 , points:0},
                {name: "Player3", skips:5 , points:0},
                {name: "Player4", skips:5 , points:0}
            ],
            round:0,
            currentWord:0,
            time: 10,
            skips: 50,
            words: [],
            showingWord:"",
            counting: false,




        }),
        created() {
            fetch('https://api.myjson.com/bins/1e7q91')
                .then(res => res.json())
                .then(res => {
                    this.words = res.words;
                })
        },
        methods: {
            startCountdown: function () {
                this.counting = true;
            },
            handleCountdownEnd: function () {
                this.counting = false;
            },
            addPoint(){
                this.points = this.points + 10;
                this.showingWord = JSON.stringify(this.words[this.currentWord])
                this.currentWord = this.currentWord + 1;
            }
        }
    }
</script>

<style scoped>
    .rounded-card{
        border-radius:25px;
    }
    .grad {
        background-image: linear-gradient(#5b63fb, #45e8ad);
    }
    .grad-top {
        background-image: linear-gradient(#5b63fb, #545ef9);
    }
</style>
