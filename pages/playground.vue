<template>
  <div>
    <CommonStepper
      :steps="[
        {
          id: 1,
          label: 'Адрес доставки',
          icon: 'icon-location',
        },
        {
          id: 2,
          label: 'Контактные данные',
          icon: 'icon-contact',
        },
        {
          id: 3,
          label: 'Оплата',
          icon: ' icon-wallet',
        },
      ]"
    />
    
  </div>
</template>
