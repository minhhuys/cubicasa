<template>
    <div class="manage-settings">
        <h3 class="text-center">
            Manage offices & users
        </h3>
        <hr>
        
        <div v-for="office in data" :key="office._id" class="office-info mb-3">
            <div class="office-info-title d-flex justify-content-between align-items-center mb-2">
                <p class="mb-0">
                    {{office.name}}
                </p>
                <button class="btn btn-light width-sm" @click="handleOpenModal(office)">
                    <i class="uil uil-edit mr-1"></i>
                    Edit
                </button>
            </div>

            <div v-if="office.employees && office.employees.length !== 0" class="office-info-employee">
                <b-dropdown 
                    v-for="employee in office.employees" 
                    :key="employee._id" 
                    class="mr-2" 
                    variant="info"
                >
                    <template slot="button-content">
                        <i class="uil uil-user mr-2"></i>
                        {{employee.name}}
                        <i class="uil uil-angle-down"></i>
                    </template>
                    <p class="py-2">Account details</p>
                    <div class="my-2">
                        <p>{{employee.email}}</p>
                        <p>Another action</p>
                    </div>
                    <b-dropdown-item @click="handleOpenUserModal(employee)">
                        <i class="uil uil-edit mr-1"></i>
                        Edit
                    </b-dropdown-item>
                </b-dropdown>
            </div>
            <p v-else class="mb-0">
                No users in this office.
            </p>

            <button 
                class="btn btn-light width-lg my-3" 
                @click="handleOpenUserModal({})"
            >Add new user
            </button>
        </div>

        <button 
            class="btn btn-light width-lg" 
            @click="handleOpenModal({})"
        >Add new office
        </button>

        <AddOfficeModal ref="addOfficeModal" :office="officeInfo" />
        <AddUserModal ref="addUserModal" :user="userInfo" />
    </div>
</template>

<script>

const AddOfficeModal = () => import("./modal/add-office")
const AddUserModal = () => import("./modal/add-user")

export default {

    components: {
        AddOfficeModal,
        AddUserModal
    },

    data() {
        return {
            data: [
                {
                    _id: 123,
                    name: 'Test',
                    employees: [
                        {
                            name : 'Huy',
                            surname: 'Nguyen Minh',
                            email: 'huy.nguyen@cubicasa.com',
                            role_id: 1
                        },
                        {
                            name : 'Huy Fake',
                            surname: 'Nguyen Minh',
                            email: 'huy.nguyen@cubicasa.com',
                            role_id: 2
                        }
                    ]
                },
                {
                    _id: 456,
                    name: 'Test 2',
                    employees: []
                }
            ],
            role: [
                {
                    _id: 1,
                    title: 'User'
                },
                {
                    _id: 2,
                    title: 'Manager'
                },
                {
                    _id: 3,
                    title: 'Collaborator'
                }
            ],
            officeInfo: {},
            userInfo: {}
        }
    },

    mounted() {
        console.log('mounted Manage')
    },

    methods: {
        handleOpenModal(data) {
            this.officeInfo = data
            this.$refs.addOfficeModal.visible = true
        }
    }
}
</script>

<style lang="scss">
.manage-settings {
    .office-info {
        border-bottom: 1px solid #eaeaea;

        .office-info-title {
            p {
                font-size: 18px;
                font-weight: 700;
            }
        }

        .office-info-employee {
            .btn-info {
                color: rgba(0,0,0,.87);
                background: #fff;
                border: 1px solid rgba(34,36,38,.15);
                box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
            }

            .dropdown {
                .dropdown-menu {
                    border: 1px solid #eaeaea;
                    padding: 0;

                    p {
                        margin-bottom: 0; 
                        padding: 0.3rem 1rem;
                        text-transform: uppercase;
                        font-size: 12px;
                        font-weight: 700;
                        color: rgba(0,0,0,.85);
                        white-space: nowrap;
                    }

                    > p {
                        border-bottom: 1px solid #eaeaea;
                        margin-bottom: 8px;
                    }

                    .dropdown-item {
                        padding-left: 12px;
                        padding-top: 8px;
                        margin-left: 0;
                        border-top: 1px solid #eaeaea;
                    }
                }
            }
        }
    }
}
</style>