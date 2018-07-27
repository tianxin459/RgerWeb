<template>
<div class="activity">
        <div class="md-title">{{title}}</div>
        <div class="activity-detail">
            <div class="detail">
                <div class="content">{{content}}</div>
                <span>Creator: {{creator}}</span>
                <span>Date: {{date}}</span>
            </div>
            <md-button class="md-raised md-primary">Detail</md-button>
        </div>
</div>
</template>
<script>
    export default{
        name:'activity',
        props:['title','creator','date','content']
    }
</script>
<style>
 div.activity{
     display: flex;
     width: 100%;
     box-shadow: 5px 2px 2px -2px;
 }

 div.activity *{
     display: flex
 }
</style>
