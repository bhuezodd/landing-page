import ContactService from '@/services/Contact'

export default {
    async sendEmail({ commit }, type) {
        try {
            let status = await ContactService.sendEmailAPI(type);
            return status;
        } catch (error) {
            console.log(error);
        }
    },
}