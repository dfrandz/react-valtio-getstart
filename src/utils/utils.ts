export const get_phone_format = (phone: any)=>{
    return phone.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "(+228) $1 $2 $3 $4");
}

export const get_date_format = (created_at: any)=>{
  return new Date(created_at).toLocaleDateString();
}

