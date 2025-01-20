<template>
    <div class=" bg-white rounded-lg shadow-md mb-6">
        <div class="p-6 flex items-center justify-between border-b border-white-500">
            <h1 class="text-2xl font-semibold text-gray-800">Персональные данные</h1>
            <BaseButton variant="lightDanger" icon="icon-logout" iconPosition="right" @click="openLogoutModal">
                Выйти
            </BaseButton>
        </div>

        <!-- Display User Data -->
        <div v-if="!isEditing" class="mt-6 px-6 pb-6">
            <div class="mt-4 space-x-6">
                <img :src="user.photo" alt="User Photo" class="w-24 h-24 rounded-full ml-4 border-2 border-gray-300" />
                <div class="flex items-center mt-4">
                    <div class="border border-gray-300 p-6 rounded-l-lg">
                        <p>First Name:</p>
                        <h2 class="text-xl font-bold">{{ user.fullName }}</h2>
                    </div>
                    <!-- <div class="ml-4">
                        <p>Last Name</p>
                        <h2 class="text-xl font-bold">{{ user.lastName }}</h2>
                    </div> -->
                    <div class="border border-gray-300 p-6 rounded-r-lg">
                        <p>Address</p>
                        <h2 class="text-xl font-bold">{{ user.address }}</h2>
                    </div>

                </div>
            </div>
            <!-- Edit and Logout Buttons -->
            <div class="mt-4 flex justify-end">
                <BaseButton @click="toggleEdit" icon="icon-edit" class="!w-1/6">
                    Изменить
                </BaseButton>

            </div>
        </div>

        <!-- Edit Form -->
        <div v-if="isEditing" class="space-y-4 mt-8 px-6 pb-6">
            <div class="flex items-center">
                <label class="font-medium text-gray-700"> <img :src="user.photo" alt="User Photo"
                        class="w-24 h-24 rounded-full border-2 border-gray-300" />
                </label>
                <input ref="photoInput" type="file" @change="onPhotoChange" class="hidden" />
                <button @click="changePhoto">
                    Выбрать фото
                </button>
            </div>
            <div>
                <label class="font-medium text-gray-700">Ф.И.О:</label>
                <BaseInput v-model="editedUser.firstName" type="text"
                    class="w-full border rounded-lg :placeholder:text-gray-700" placeholder="Enter Fullname" />
                <!-- <input v-model="editedUser.firstName" type="text" class="w-full px-4 py-2 border rounded-lg" /> -->
            </div>
            <div>
                <label class="font-medium text-gray-700">Адрес:</label>
                <BaseInput v-model="editedUser.address" type="text"
                    class="w-full border rounded-lg :placeholder:text-gray-700" placeholder="Enter Fullname" />
            </div>

            <!-- Save and Cancel Buttons -->
            <div class="mt-4 flex items-center justify-end gap-4">
                <BaseButton @click="cancelEdit" class="px-4 py-2">
                    Отмена
                </BaseButton>
                <BaseButton @click="saveChanges" variant="lightDanger">
                    Сохранить
                </BaseButton>

            </div>
        </div>

        <!-- Logout Modal -->
        <div v-if="showLogoutModal"
            class="fixed z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div class="bg-white p-6 rounded-lg shadow-lg max-w-md">
                <h2 class="text-xl font-bold mb-4">Вы уверены, что хотите выйти?</h2>
                <div class="flex justify-end space-x-4">
                    <button @click="confirmLogout" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                        Да
                    </button>
                    <button @click="closeLogoutModal" class="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const user = ref({
    photo: "https://via.placeholder.com/150",
    firstName: "",
    lastName: "",
    address: "",
});

// Temporary data for editing
const isEditing = ref(false);
const editedUser = ref({ fullName: "", address: "" });
const editedPhoto = ref(null);
const photoInput = ref(null);
const showLogoutModal = ref(false);

// Load user data from localStorage
onMounted(() => {
    const savedUser = JSON.parse(localStorage.getItem("userData"));
    if (savedUser) {
        user.value = savedUser;
    }
});

// Split fullName into firstName and lastName
const splitFullName = (fullName) => {
    const names = fullName.split(" ");
    return {
        firstName: names[0] || "",
        lastName: names[1] || "",
    };
};

const toggleEdit = () => {
    isEditing.value = true;
    editedUser.value = {
        fullName: `${user.value.firstName} ${user.value.lastName}`.trim(),
        address: user.value.address,
    };
};

const saveChanges = () => {
    const { firstName, lastName } = splitFullName(editedUser.value.fullName);
    user.value = {
        photo: editedPhoto.value || user.value.photo,
        firstName,
        lastName,
        address: editedUser.value.address,
    };

    // Save to localStorage
    localStorage.setItem("userData", JSON.stringify(user.value));

    isEditing.value = false;
};

const cancelEdit = () => {
    editedUser.value = { fullName: "", address: "" };
    editedPhoto.value = null;
    isEditing.value = false;
};

const changePhoto = () => {
    photoInput.value.click();
};

const onPhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        editedPhoto.value = URL.createObjectURL(file);
    }
};

// Logout Modal Functions
const openLogoutModal = () => {
    showLogoutModal.value = true;
};

const closeLogoutModal = () => {
    showLogoutModal.value = false;
};

const confirmLogout = () => {
    showLogoutModal.value = false;
    alert("Вы вышли из системы!");
    localStorage.removeItem("userData");
};
</script>

