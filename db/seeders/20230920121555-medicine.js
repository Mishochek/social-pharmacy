

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Medicines', [
        {
          img: 'https://cdn.eapteka.ru/upload/offer_photo/110/665/1_ef1a30f54b1417a964561b54cf95471c.png?t=1688553333&_cvc=1694685954',
          name: 'Смазмалгон',
          startprice: '273',
          saleprice: '200'
        },

        {
          img: 'https://cdn.eapteka.ru/upload/offer_photo/212/692/resized/450_450_1_a0f98e59c595d9e81d06eb5e06d9b657.png?t=1656942472&_cvc=1694685954',
          name: 'Граммидин',
          startprice: '520',
          saleprice: '460'
        },

        {
          img: 'https://cdn.eapteka.ru/upload/offer_photo/209/706/resized/450_450_1_c379f778a303e03bcb9a5374828392a3.png?t=1672060309&_cvc=1694685954',
          name: 'МИГ 400',
          startprice: '170',
          saleprice: '100'
        },

        {
          img: 'https://cdn.eapteka.ru/upload/offer_photo/336/663/resized/450_450_1_aac6edab0fa67bee82a8e7f188a546ba.png?t=1650801135&_cvc=1694685954',
          name: 'Ингавирин',
          startprice: '900',
          saleprice: '700'
        },
        {
          img: 'https://www.designland.ru/upload/information_system_11/6/2/2/item_622/information_items_622.jpg',
          name: 'Анальгин',
          startprice: '324',
          saleprice: '150'
        },
        {
          img: 'https://almax.su/wp-content/uploads/2019/01/upakovka-farmacevticheskaya-1261.png',
          name: 'Офиген',
          startprice: '228',
          saleprice: '110'
        },
        {
          img: 'https://upack-liner.ru/wp-content/uploads/2019/05/lekarstva3.jpg',
          name: 'Глицин форте',
          startprice: '198',
          saleprice: '90'
        },
        {
          img: 'https://upack-liner.ru/wp-content/uploads/2019/05/lekarstva4.jpg',
          name: 'Вириликс',
          startprice: '361',
          saleprice: '197'
        },

     ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
