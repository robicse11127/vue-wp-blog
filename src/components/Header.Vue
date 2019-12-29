<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-container>
                <b-navbar-brand>
                    <router-link to="/" class="navbar-brand">Vue Blog</router-link>
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <li><router-link to="/page" class="nav-link">Page</router-link></li>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                        </b-nav-form>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>


<script>
export default {
    name: 'Header'
}
</script>