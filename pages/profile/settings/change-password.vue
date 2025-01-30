<template>
  <div class="bg-white p-5 rounded-xl">
    <h1 class="text-2xl text-black-500 font-bold mb-4">Изменение пароля</h1>
    <hr class="mt-2.5 h-px border-none bg-white-500" />
    <form>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6">
        <BaseFormGroup
          id="name"
          :label="'Старый пароль'"
          :label-style="'!text-base !text-black-500 '"
        >
          <BaseInput id="name" type="password" placeholder="Введите пароль" />
        </BaseFormGroup>
        <br class="max-sm:hidden block" />
        <BaseFormGroup
          id="name"
          :label="'Новый пароль'"
          :label-style="'!text-base !text-black-500 '"
        >
          <BaseInput id="name" type="password" placeholder="Введите пароль" />
        </BaseFormGroup>
        <BaseFormGroup
          id="name"
          :label="'Подтвердите пароль'"
          :label-style="'!text-base !text-black-500 '"
        >
          <BaseInput id="name" type="password" placeholder="Введите пароль" />
        </BaseFormGroup>
      </div>
      <BaseButton class="mt-6 ml-auto">Сохранить</BaseButton>
    </form>
  </div>
</template>
