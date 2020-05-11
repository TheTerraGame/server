var boxdata = [
    `<p>Новичку</p>
    <p>Добро пожаловать в Лос-Сантос!</p>
    <p>Устроиться на работу вы можете в "Мэрии",</p>
    <p>Добраться до нее вы можете вызвав "такси", дождавшись "автобуса" или арендовать "скутер".</p>
    <p>Получить лицензию на вождение транспорта, вы можете получить в автошколе, пройдя "тест на вождение".</p>
    <p>Лицензию на оружие можете приобрести в Полиции.</p>
    <br>
    <p>Работы</p>
    <br>
    <p>Газонокосильщик доступен с 0 уровня</p>
    <p>Электрик доступен с 1 уровня</p>
    <p>Почтальон доступен со 2 уровня</p>
    <p>Автобусник доступен с 3 уровня</p>
    <p>Автомеханик доступен с 3 уровня</p>
    <p>Таксист доступен с 3 уровня</p>
    <p>Инкассатор доступен с 4 уровня</p>
    <p>Дальнобойщик доступен с 5 уровня</p>
    <br>
    <p>Команды</p>
    <br>
    <p>/me [действие] - Сделать какое-либо действие, "/me смотрит в небо".</p>
    <p>/do [событие] - Описание события, "/do начинается дождь".</p>
    <p>/try [действие] - Решение спорной ситуации, "/try починить машину (успешно)".</p>
    <p>/buybiz - купить бизнес.</p>
    <p>/f - чат фракции.</p>
    <p>/eject [id игрока] - выкинуть из машины</p>
    <br>
    <p>Банды</p>
    <br>
    <p>/capture - начать капт.</p>
    <br>
    <p>Мафии</p>
    <br>
    <p>/bizwar - начать войну за бизнес.</p>
    <br>
    <p>Полиция</p>
    <br>
    <p>/pull - вытащить из машины.</p>
    <p>/incar - посадить в машину.</p>
    <p>/rfp - освободить из тюрьмы.</p>
    <p>/arrest - посадить в тюрьму.</p>
    <p>/su - подать в розыск.</p>
    <p>/pd - принять вызов.</p>
    <br>
    <p>Медики</p>
    <br>
    <p>/heal [id] [price] - вылечить игрока.</p>
    <p>/medkit [id] [price] - продать аптечку игроку.</p>
    <p>/ems - принять вызов.</p>
    <br>
    <p>Дальнобойщики</p>
    <br>
    <p>/orders - список заказов</p>
    <br>
    <p>Механики</p>
    <br>
    <p>/repair - предложить починку</p>
    <br>
    <p>Помощь</p>
    <br>
    <p>/report - написать жалобу на игрока.</p>
    <p>/help - попросить помощи у администрации сервера.</p>`,
]

var infobox = new Vue({
    el: '.infobox',
    data: {
        active: false,
        content: "",
        header: "Test",
    },
    methods: {
        set: function(head, id){
            this.header = head
            this.content = boxdata[id]
            this.active = true
        },
        exit: function(){
            this.active = false
            mp.trigger("ib-exit");
        }
    }
})