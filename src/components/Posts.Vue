<template>
    <div>   
        <b-container>
            <b-row>
                <b-col md="4">
                    <div>
                        <b-card
                            title="Card Title"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2"
                        >
                            <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>

                            <b-button href="#" variant="primary">Go somewhere</b-button>
                        </b-card>
                    </div>
                </b-col>
                <b-col md="4">
                    <div>
                        <b-card
                            title="Card Title"
                            img-src="https://picsum.photos/600/300/?image=24"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2"
                        >
                            <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>

                            <b-button href="#" variant="primary">Go somewhere</b-button>
                        </b-card>
                    </div>
                </b-col>
                <b-col md="4">
                    <div>
                        <b-card
                            title="Card Title"
                            img-src="https://picsum.photos/600/300/?image=23"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2"
                        >
                            <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>

                            <b-button href="#" variant="primary">Go somewhere</b-button>
                        </b-card>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <b-container class="mt-3">
            <b-row>
                <b-col>
                    <b-button variant="outline-primary">Prev</b-button> &nbsp;
                    <b-button variant="outline-primary">Next</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Posts'
}
</script>
