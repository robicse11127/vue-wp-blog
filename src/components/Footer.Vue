<template>
    <footer>
        <div class="app-footer">
            <b-container>
                <b-row>
                    <b-col col md="4">
                        <h4>Widget Title</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nisi minima perspiciatis facere ea sunt iure ullam totam possimus est dolorem similique, provident magnam incidunt obcaecati nihil eaque laboriosam modi!</p>
                    </b-col>
                    <b-col col md="4">
                        <h4>Widget Title</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nisi minima perspiciatis facere ea sunt iure ullam totam possimus est dolorem similique, provident magnam incidunt obcaecati nihil eaque laboriosam modi!</p>
                    </b-col>
                    <b-col col md="4">
                        <h4>Widget Title</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nisi minima perspiciatis facere ea sunt iure ullam totam possimus est dolorem similique, provident magnam incidunt obcaecati nihil eaque laboriosam modi!</p>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="app-copyright">
            <b-container>
                <b-row>
                    <b-col md="6">
                        <h5 class="app-title">Vue Blog</h5>
                    </b-col>
                    <b-col md="6" class="text-right">
                        <p class="muted"> &copy; 2020. All Right Reserved!</p>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.app-footer {
    width: 100%;
    min-height: auto;
    background-color: #f9f9f9;
    padding: 60px 0px;
    margin-top: 30px;
}
.app-copyright {
    background: #222;
    width: 100%;
    min-height: auto;
    padding-top: 25px;
    color: #fff;
    display: flex;
    align-items: center;
}
.app-title {
    margin: 0px;
    line-height: 1;
}
</style>>
