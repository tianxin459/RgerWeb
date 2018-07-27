<template>
<md-app>
    <md-app-toolbar>
                <span class="md-title">Rger Web</span>
    </md-app-toolbar>
    <!-- <md-app-drawer md-permanent="full" class=" md-scrollbar">
            <md-toolbar class="md-transparent" md-elevation="0">
            Configuration
            </md-toolbar>

        <md-list>
        </md-list>
    </md-app-drawer> -->
    <md-app-content>
              <md-dialog-alert
                    :md-active.sync="showDialog"
                    md-title="Post created!"
                    :md-content="error"/>
            <div class="md-layout">
            <md-table v-model="activities" md-sort="date" md-sort-order="desc" md-card>
                <md-table-toolbar>
                    <h1 class="md-title">activities</h1>
                </md-table-toolbar>
                            
                <md-table-row slot="md-table-row" slot-scope="{ item  }">
                    <md-table-cell md-label="Creator" md-sort-by="Creator">{{ item.Creator }}</md-table-cell>
                    <md-table-cell md-label="title" md-sort-by="title">{{ item.title }}</md-table-cell>
                    <md-table-cell md-label="date" md-sort-by="date">{{ item.date }}</md-table-cell>
                    <md-table-cell md-label="time" md-sort-by="time">{{ item.time }}</md-table-cell>
                    <md-table-cell md-label="content" md-sort-by="content">{{ item.content }}</md-table-cell>
                    <md-table-cell>
                        <md-button class="md-raised md-primary">Detail</md-button>
                    </md-table-cell>
                </md-table-row>
                <!-- <md-table-row>
                    <md-table-head>Creator</md-table-head>
                    <md-table-head>Title</md-table-head>
                    <md-table-head>Time</md-table-head>
                    <md-table-head>Content</md-table-head>
                    <md-table-head></md-table-head>
                </md-table-row>
                <md-table-row  v-for="(a,i) in activities" :key="a.RowKey">
                    <md-table-cell>{{a.Creator}}</md-table-cell>
                    <md-table-cell>{{a.title}}</md-table-cell>
                    <md-table-cell>{{a.date}}-{{a.time}}</md-table-cell>
                    <md-table-cell>{{a.content}}</md-table-cell>
                    <md-table-cell>
                        <md-button class="md-raised md-primary">Detail</md-button>
                    </md-table-cell>
                </md-table-row> -->
            </md-table>
            <!-- <md-list>
                <md-list-item  v-for="(a,i) in activities" :key="a.RowKey" >
                        <activity :title="a.title" :creator="a.Creator" :date="a.date" :content="a.content"></activity>
                </md-list-item>
            </md-list> -->
             <vue-json-pretty :data="activities"></vue-json-pretty>
            </div>
    </md-app-content>
</md-app>
</template>
<script>
import VueJsonPretty from 'vue-json-pretty';
import activity from './activity.vue';
import storage from '../util/storage';
    export default{
        name:"app",
        data:()=>{
            return{
                val:'la la la',
                showDialog:false,
                error:"",
                activities:{},
            }
        },
        components:{
            VueJsonPretty,
            activity
        },
        created(){
            // console.log('Vue.http',Vue.http);
            // this.$service.test();
            // storage.getActiviteUser(resp=>console.log(resp),null,'2018-05-05')
            let url = storage.getAllListUrl('2018-01-01');
            this.$http.get(url)
                        .then((resp) => {
                            this.activities = resp.body.value;
                            this.activities.sort((a,b)=> Date.parse(b.date) - Date.parse(a.date));
                       })
                        .catch((err) => {
                            console.error(err)
                        });
        }
    }
</script>
<style>

.md-app{
    max-height:100vh;
}
</style>
